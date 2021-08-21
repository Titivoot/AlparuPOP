import { writable } from 'svelte/store';

export const count = writable(+(localStorage.getItem('count') || '0'));

count.subscribe((val) => (localStorage.count = `${val}`));
