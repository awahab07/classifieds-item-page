import 'cypress';
import { vipPageObjects } from './vip.po';

describe('VIP', () => {
  beforeEach(() => {
    cy.viewport('iphone-6+');
    cy.visit('/');
  });

  it('should display images', () => {
    cy.get(`[data-test-id=".${vipPageObjects.slideImage}"]`).as('availableImages');

    // Find images on VIP
    cy.get('@availableImages').then(($slideImages: Cypress.ObjectLike) => {
      $slideImages.its('length').should('be.gte', 1);
    });

    // Find and click full screen button
    cy.get(`[data-test-id=".${vipPageObjects.sliderContainer}"]`).then(($container: Cypress.ObjectLike) => {
      // TODO: assert $container.width >= 0.9 * viewport().width
    });
  });
});
