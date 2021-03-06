// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import { action, computed, observable } from 'mobx';

let instance = null;

export default class PlaygroundStore {
  @observable components = [];
  @observable selectedIndex = 0;

  @computed get component () {
    return this.components[this.selectedIndex];
  }

  @action add (component) {
    this.components.push(component);
  }

  @action setSelectedIndex (selectedIndex) {
    this.selectedIndex = selectedIndex;
  }

  static get () {
    if (!instance) {
      instance = new PlaygroundStore();
    }

    return instance;
  }

  static register (component) {
    PlaygroundStore.get().add(component);
  }
}
