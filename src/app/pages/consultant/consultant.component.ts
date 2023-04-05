import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ContextConsultant } from "src/app/core/interfaces";
import { AddAndQueryWordsService } from "src/app/core/services/add-and-query-words/add-and-query-words";

@Component({
    selector: 'app-consultant',
    templateUrl: './consultant.component.html',
    styleUrls: ['./consultant.component.scss']
})
export class ConsultantComponent implements OnInit {
    word_search: FormGroup;
    context_consultant: ContextConsultant;

    constructor(private addAndQueryWordsService: AddAndQueryWordsService) {}

    ngOnInit(): void {
        this.buildForm();
    }

    public onSearch(): void {
        if (this.word.value) {
            this.context_consultant = this.addAndQueryWordsService.retrieveTheLastWord(this.word.value);
        }
    }

    public onAddWord(): void {
        console.log('poi')
    }

    private buildForm(): void {
        this.word_search = new FormGroup({
            word: new FormControl('')
        });
    }

    get word(): FormControl { return this.word_search.get('word') as FormControl };
}