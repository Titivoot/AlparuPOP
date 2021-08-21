import { writable } from 'svelte/store';
import { browser  } from '$app/env';

export const count = writable(+(browser && localStorage.getItem('count') || '0'));

count.subscribe((val) => (browser ? localStorage.count = `${val}`: ''));
