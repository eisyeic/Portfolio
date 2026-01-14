import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { LegalNoticeComponent } from './features/legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'legal-notice', component: LegalNoticeComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
];