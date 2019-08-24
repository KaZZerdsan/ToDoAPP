import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
	quest: string = "";
	quest_list = [];
	complete = [];

	add_quest(quest){
		if (quest != ""){
			this.quest_list.push(quest);
			this.complete.push(false);
			this.quest = "";
		}
		else {
			alert("Vvedi zadachu, dubina!!");
		}
	}

	remove_quest(i){
		this.quest_list.splice(i, 1);
		this.complete.splice(i, 1);
	}

	Toggle_Line(i){
		this.complete[i] = !this.complete[i];
	}

  constructor() { }

  ngOnInit() {
  }

}