import React, {useState, useRef, useEffect, useCallback} from "react";
import {Chip} from "@/shared/ui/Chip";
import styles from "./MultiSelect.module.css";

export interface Option {
    id: string;
    name: string;
}

interface MultiSelectProps {
    options: Option[];
    selectedIds?: string[];
    onChange?: (ids: string[]) => void;
    placeholder?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
                                                            options,
                                                            selectedIds = [],
                                                            onChange,
                                                            placeholder = "Выберите..."
                                                        }) => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<string[]>(selectedIds);
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Синхронизация внешних выбранных значений
    useEffect(() => {
        setSelected(selectedIds);
    }, [selectedIds]);

    const toggleOption = useCallback((id: string) => {
        setSelected(prev => {
            const newSelected = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
            onChange?.(newSelected);
            return newSelected;
        });
    }, [onChange]);

    const filteredOptions = options.filter(option =>
        option.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleClickOutside = useCallback((e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) {
            setOpen(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [handleClickOutside]);

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.inputWrapper} onClick={() => setOpen(true)}>
                <div className={styles.selectedValues}>
                    {selected.map(id => {
                        const option = options.find(o => o.id === id);
                        if (!option) return null;
                        return <Chip key={id} label={option.name} onDelete={() => toggleOption(id)}/>;
                    })}
                </div>

                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder={placeholder}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onFocus={() => setOpen(true)}
                />
            </div>

            {open && (
                <div className={styles.dropdown}>
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map(option => (
                            <div
                                key={option.id}
                                className={`${styles.option} ${selected.includes(option.id) ? styles.optionSelected : ""}`}
                                onClick={() => toggleOption(option.id)}
                            >
                                {option.name}
                            </div>
                        ))
                    ) : (
                        <div className={styles.option}>Ничего не найдено</div>
                    )}
                </div>
            )}
        </div>
    );
};
