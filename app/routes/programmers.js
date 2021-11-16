import Route from '@ember/routing/route';

export default class ProgrammersRoute extends Route {
	model() {
		return ['Ahmad Shafiq', 'Ghulam Murtaza', 'Ahsan Ellahi'];
	}
}
