export function KV({
    label,
    children,
}: {
    children: React.ReactNode;
    label: string;
}): JSX.Element {
    return <div className="text-center">
        <h2 className="text-large font-bold text-blue-500">{label}</h2>
        <p className="px-2">{children}</p>
    </div>
}
