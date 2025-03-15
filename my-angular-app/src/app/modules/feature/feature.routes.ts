import { Routes } from '@angular/router';
import { Feature1Component } from '../../pages/feature1/feature1.component';
import { Feature2Component } from '../../pages/feature2/feature2.component';

export const featureRoutes: Routes = [
  { path: '',  component: Feature1Component },
  { path: 'feature1', component:Feature1Component },
  { path: 'feature2', component:Feature2Component },
];