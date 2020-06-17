
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
    
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEdittComponent } from './recipes/recipe-editt/recipe-editt.component';

const appRoutes: Routes = [
    { path:'', redirectTo: '/recipes', pathMatch:'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component:RecipeEdittComponent},
        { path:':id', component:RecipeDetailComponent },
        { path: ':id/edit', component:RecipeEdittComponent}
    ]},
    { path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule {

}