import Actions from './Actions';

/* eslint-disable class-methods-use-this */
class TestActions extends Actions {
  action1() {
    return 'test';
  }
  action2() {
    return 'test2';
  }
}
/* eslint-enable class-methods-use-this */

describe('Actions', () => {
  it('assigns an id to all methods', () => {
    // Arrange
    const testActions = new TestActions();

    // Act/Assert
    expect(testActions.action1.__jiveId).toEqual('TestActions.action1');
    expect(testActions.action2.__jiveId).toEqual('TestActions.action2');
  });
  it('wraps all methods and returns action', () => {
    // Arrange
    const testActions = new TestActions();

    // Act
    const actionResult = testActions.action1();

    // Assert
    expect(actionResult).toEqual({
      type: 'TestActions.action1',
      payload: 'test',
    });
  });
  it('gets all action functions', () => {
    // Arrange
    const testActions = new TestActions();

    // Act
    const actionFunctions = Actions.getAllActionFunctions(testActions);

    // Assert
    expect(actionFunctions.length).toEqual(2);
    expect(actionFunctions[0]).toEqual('action1');
    expect(actionFunctions[1]).toEqual('action2');
  });
});
