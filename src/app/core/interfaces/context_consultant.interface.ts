export interface FoundWord {
    title: string;
    translation: string;
    description: Array<string>;
}

export interface ContextConsultant {
    found_word: FoundWord,
    error: boolean;
    word: string;
}