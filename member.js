function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'app/members/skills-member.html',
    scope: {
      member: '='
    }
  };
}