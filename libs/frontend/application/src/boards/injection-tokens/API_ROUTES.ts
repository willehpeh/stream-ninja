import { InjectionToken } from '@angular/core';
import { ApiRoutes } from '../contracts/api-routes';

export const API_ROUTES = new InjectionToken<ApiRoutes>('API_ROUTES');
