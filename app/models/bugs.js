import DS from 'ember-data';

export default DS.Model.extend({
  isFixed: DS.attr('boolean', { defaultValue: false }),
  bugDescription: DS.attr('string'),
  stepsToReproduce: DS.attr('string'),
  assignedTo: DS.attr('string'),
  expectedBehavior: DS.attr('string'),
  observedBehavior: DS.attr('string'),
  imageURL: DS.attr('string')
});
