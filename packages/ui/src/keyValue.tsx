export function KV({
    label,
    children,
}: {
    children: React.ReactNode;
    label: string;
}): JSX.Element {
    return <div>
        <h2 className="text-large font-bold">{label}</h2>
        <p className="px-2">{children}</p>
    </div>
}
