import { Injectable } from "@angular/core";
import { StorageService } from "../storage/storage.service";
import { ContextConsultant } from "../../interfaces";

@Injectable({
    providedIn: 'root'
})
export class AddAndQueryWordsService {
    private KEY_STORAGE = 'STORAGE_WORDS';

    constructor(private storageService: StorageService) { }

    public retrieveTheLastWord(word_search: string): ContextConsultant {
        const words: Array<any> = this.getStorage();
        
        return this.handlingDataReturn(word_search, words.filter( (word) => word.title === word_search.toLowerCase()));
    }

    public addWord(value: any): void {
        this.addStorage(value);
    }

    private handlingDataReturn(word_search: string, words: Array<any>): ContextConsultant {
        return {
            found_word: words.length > 0 ? words[0] : null,
            error: words.length > 0 ? false : true,
            word: word_search
        }
    }

    private addStorage(value: any): void {
        this.storageService.add(this.KEY_STORAGE, JSON.stringify(value));
    }

    private getStorage(): Array<any> {
        if (this.storageService.check(this.KEY_STORAGE)) {
            return JSON.parse(this.storageService.get(this.KEY_STORAGE));
        }
        return [ {title: 'welcome', translation: 'bem-vindo', description: ['teste testando']}, {word: 'teste2', description: ['teste testando']}];
    }
}