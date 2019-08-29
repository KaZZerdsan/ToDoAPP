import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
	quest: string = "";
	questList = [];
	check = [false, false]

	draw(){
		let view = [];
		if (this.check[0]){
			this.questList.forEach(function adding(item){
				if (item.state = false) view.push(item.name);
			})
		}
		if (this.check[1]){
			this.questList.forEach(function adding(item){
				if (item.state = true) view.push(item.name);
			})
		}
		return view;
	}

	addQuest(quest){
		if (quest != ""){
			this.questList.push({
				name: quest,
				state: false
			});
			this.quest = "";
		}
		else {
			alert("Vvedi zadachu, dubina!!");
		}
	}

	removeQuest(i){
		this.questList.splice(i, 1);
	}

	toggleLine(i){
		this.questList[i].state = !this.questList[i].state;
	}

	itemCounting(){
		let count = 0
		this.questList.forEach(function counting(item) {
			if (item.state == false){
				count++;
			}
		})
		return count;
	}

  constructor() { }

  ngOnInit() {
  }

}