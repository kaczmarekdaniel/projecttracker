import { useCallback, useEffect, useState } from "react";

interface Shortcut {
    name: string;
    key: string;
    action: () => void;
}

export const InteractionHandler = () => {
    const [shortcuts, setShortcuts] = useState<Shortcut[] | []>([
        { name: "test1", key: "f", action: () => console.log("f clicked") },
        { name: "test2", key: "d", action: () => console.log("d clicked") },
    ]);

    const registerShortcut = (data: Shortcut) => {
        setShortcuts((prev) => [...prev, data]);
    };

    const removeShortcut = (key: string) => {
        setShortcuts((prev) => prev.filter((shortcut) => shortcut.key !== key));
    };

    const handleKeyPress = useCallback(
        (event: KeyboardEvent) => {
            if (!event.metaKey) return;

            const item = shortcuts.find(
                (shortcut) => event.key === shortcut.key
            );
            if (!item) return;

            try {
                event.preventDefault();
                item.action();
            } catch {
                console.error("wtfff");
            }
        },
        [shortcuts]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [handleKeyPress]);

    return { registerShortcut, removeShortcut };
};
