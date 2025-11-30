import React, {useState} from "react";
import {Chip} from "@/shared/ui/Chip";
import styles from "./KeywordsInput.module.css";

interface KeywordsInputProps {
    initialKeywords?: string[];
    onChange?: (keywords: string[]) => void;
    placeholder?: string;
}

export const KeywordsInput: React.FC<KeywordsInputProps> = ({
                                                                initialKeywords = [],
                                                                onChange,
                                                                placeholder = "Введите ключевое слово и нажмите Enter"
                                                            }) => {
    const [keywords, setKeywords] = useState<string[]>(initialKeywords);
    const [input, setInput] = useState("");

    const addKeyword = () => {
        const value = input.trim();
        if (value && !keywords.includes(value)) {
            const newKeywords = [...keywords, value];
            setKeywords(newKeywords);
            onChange?.(newKeywords);
        }
        setInput("");
    };

    const removeKeyword = (word: string) => {
        const newKeywords = keywords.filter(k => k !== word);
        setKeywords(newKeywords);
        onChange?.(newKeywords);
    };

    return (
        <div className={styles.container}>
            <div className={styles.keywordsList}>
                {keywords.map(word => (
                    <Chip key={word} label={word} onDelete={() => removeKeyword(word)}/>
                ))}
            </div>

            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addKeyword()}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
};
