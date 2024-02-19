import { test, expect } from "playwright-test-coverage";
import { getCharacters, Character } from "rickmortyapi";

let character: Character;

test.beforeAll(async () => {
  const characters = (await getCharacters({ page: 1 })).data.results || [];
  expect(characters.length).toBeGreaterThan(0);
  if (characters.length) {
    character = characters[0] as Character;
  }
});

test.beforeEach(async ({ page }) => {
  expect(character).toBeDefined();
  await page.goto(`http://localhost:3000/character/${character.id}`);
});

test.describe("Character page", () => {
  test("should navigate to character page", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Ricky n Morty universe" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: character.name, level: 1 }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "About" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Episodes" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Notes" })).toBeVisible();
  });

  test("should display character details", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: character.name, level: 1 }),
    ).toBeVisible();
    await expect(page.getByText(character.species)).toBeVisible();
    await expect(page.getByText(character.gender)).toBeVisible();
    await expect(page.getByText(character.status)).toBeVisible();
    await expect(page.getByText(character.location.name)).toBeVisible();
  });

  test("should display character episodes", async ({ page }) => {
    await page.getByRole("button", { name: "Episodes" }).click();
    const episodes = await page.getByTestId("episode").count();
    expect(episodes).toEqual(character.episode.length);
  });

  test("should display character notes", async ({ page }) => {
    await page.getByRole("button", { name: "Notes" }).click();
    await expect(page.getByTestId(`notes-${character.id}`)).toBeVisible();
    await expect(page.getByRole("textbox")).toBeVisible();
    await page.fill("textarea", "This is a test note");
    await page.keyboard.press("Enter");
    await expect(page.getByText("This is a test note")).toBeVisible();
  });

  test("should delete character notes", async ({ page }) => {
    await page.getByRole("button", { name: "Notes" }).click();
    await expect(page.getByTestId(`notes-${character.id}`)).toBeVisible();
    await expect(page.getByRole("textbox")).toBeVisible();
    await page.fill("textarea", "This is a test note");
    await page.keyboard.press("Enter");
    await expect(page.getByText("This is a test note")).toBeVisible();
    await page.getByRole("button", { name: "Delete" }).click({ delay: 1000 });
    const note = await page.getByText("This is a test note").count();
    await expect(note).toEqual(0);
  });
});
