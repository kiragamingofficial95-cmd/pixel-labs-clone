import React from 'react';
import { ServicePage } from './ServicePage';
import { WEBSITE_DESIGN_PAGE, WEBSITE_REDESIGN_PAGE } from '../data/content';

export const WebsiteDesignPage: React.FC = () => <ServicePage content={WEBSITE_DESIGN_PAGE} />;

export const WebsiteRedesignPage: React.FC = () => <ServicePage content={WEBSITE_REDESIGN_PAGE} />;
