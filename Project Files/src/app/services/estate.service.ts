import { Injectable } from '@angular/core';
import { Estate } from '../tab1/estate.model';

@Injectable({
  providedIn: 'root'
})
export class EstateService {

  currentArticle:any;

	private recipes: Estate[] = [
	{
		id:'r1',
		title:'143 Brookview Membley',
		location:'Ruiru',
		price: 'From KES 500,000',
		category: 'Flats & Apartments',
		type: 'To Rent',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/j1.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	},
	{
		id:'r2',
		title:'Silver Harbor Suites',
		location:'Westlands',
		price: 'From KES 200,000',
		category: 'Homes & Apartments',
		type: 'For Sale',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/s1.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	},
	{
		id:'r3',
		title:'Tamarind Tree Suites Rosslyn',
		location:'Parklands',
		price: 'From KES 100,000',
		category: 'Flats & Apartments',
		type: 'To Rent',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/m10.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	},
	{
		id:'r4',
		title:'JUMEIRAH HEIGHTS',
		location:'Kilimani',
		price: 'From KES 600,000',
		category: 'Homes & Apartments',
		type: 'For Sale',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/h1.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	},
	{
		id:'r5',
		title:'Jambo House',
		location:'Embakasi',
		price: 'From KES 500,000',
		category: 'Homes & Apartments',
		type: 'To Rent',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/l1.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	},
	{
		id:'r6',
		title:'Jambo House 2',
		location:'Imara Daima',
		price: 'From KES 500,000',
		category: 'Homes & Apartments',
		type: 'For Sale',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/i1.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	},
	{
		id:'r7',
		title:'Jambo House 3',
		location:'Imara Daima',
		price: 'From KES 500,000',
		category: 'Homes & Apartments',
		type: 'To Rent',
		description: ' These delightful 3 and 4 bedroom apartments on Batubatu gardens Nairobi 2nd Parklands Avenue, a stone throw away from Avenue Hospital and Aga khan Hospital.',
		imgUrl:'http://kygc.org/homestay/img/apartnai/i1.jpg',
        ingredients:['All Day Dining','CCTV and WiFi','Swimming Pool']
	}

	];

  constructor() { }

  getAllRecipes(){
  	return [...this.recipes];
  }

  getRecipe(id: string){
    return {...this.recipes.find(recipe => {
      return recipe.id == id;
    })};
  }

}
