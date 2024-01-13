import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HighlightsComponent } from './components/views/highlights/highlights.component';
import { HomeComponent } from './components/views/home/home.component';
import { MakingOfComponent } from './components/views/making-of/making-of.component';
import { NewsComponent } from './components/views/news/news.component';
import { RealeasesViewComponent } from './components/views/realeases-view/realeases-view.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'realeases',
    component: RealeasesViewComponent
  },
  {
    path: 'highlights',
    component: HighlightsComponent
  },
  {
    path: 'making-of',
    component: MakingOfComponent
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
