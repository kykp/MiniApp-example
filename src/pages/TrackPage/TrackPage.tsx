import styles from "./TrackPage.module.css";
import {useState} from "react";
import {MultiSelect} from "@/shared/ui/MultiSelect";
import {KeywordsInput} from "@/shared/ui/KeywordsInput/KeywordsInput.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {worldRegions} from "@/pages/TrackPage/constants.ts";

export const TrackPage = () => {
    const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
    const [keywords, setKeywords] = useState<string[]>(["React", "JavaScript"]);

    return (
        <div className={styles.container}>
            <div className={styles.multiSelectWrapper}>
                <MultiSelect
                    options={worldRegions}
                    selectedIds={selectedRegions}
                    onChange={setSelectedRegions}
                    placeholder="Начните вводить регион..."
                />
            </div>

            <div className={styles.keywordsWrapper}>
                <KeywordsInput
                    initialKeywords={keywords}
                    onChange={setKeywords}
                    placeholder="Добавьте ключевые слова..."
                />
            </div>

            <div className={styles.buttonWrapper}>
                <Button>Запустить отслеживание</Button>
            </div>
        </div>
    );
};
