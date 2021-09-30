import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { AppMenuComponent } from './app-menu.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FallbackComponent } from './fallback.component';
import { ShouldLoginComponent } from './should-login.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    FallbackComponent,
    ShouldLoginComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule.forRoot(),
    OAuthModule.forRoot({
          resourceServer: {
            allowedUrls: ['http://localhost:8080/api'],
            sendAccessToken: true
          }
        }),
    RouterModule.forRoot([
    { path: '', redirectTo: 'basics/home', pathMatch: 'full' },
    // Note: this way of module loading requires this in your tsconfig.json: "module": "esnext"
    { path: 'basics', loadChildren: () => import('./feature-basics/basics.module').then(m => m.BasicsModule) },
    { path: 'extras', loadChildren: () => import('./feature-extras/extras.module').then(m => m.ExtrasModule) },
    { path: 'heroesdash', loadChildren: () => import('./feature-heroes/heroes.module').then(m => m.HeroesModule) },
    { path: 'should-login', component: ShouldLoginComponent },
    { path: '**', component: FallbackComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
