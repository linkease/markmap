import './web.url.1fb193ae.js';
import { S as SvelteComponent, i as init, s as safe_not_equal, a as space, e as element, t as text, c as create_component, q as query_selector_all, d as detach, b as claim_space, f as claim_element, g as children, h as claim_text, j as claim_component, k as attr, l as insert, m as append, n as mount_component, o as transition_in, p as transition_out, r as destroy_component, u as onMount, v as binding_callbacks, w as bind, x as add_flush_callback } from './client.7eb5e5f1.js';
import { M as Markmap_1 } from './markmap.831e48ac.js';
import { F as Footer } from './footer.82c52e1f.js';

/* src/routes/index.svelte generated by Svelte v3.31.2 */

function create_fragment(ctx) {
	let t0;
	let main;
	let h1;
	let em0;
	let t1;
	let t2;
	let h2;
	let em1;
	let t3;
	let t4;
	let em2;
	let t5;
	let t6;
	let markmap;
	let updating_mm;
	let t7;
	let p0;
	let strong;
	let t8;
	let t9;
	let p1;
	let a0;
	let t10;
	let t11;
	let p2;
	let a1;
	let t12;
	let t13;
	let sup;
	let t14;
	let t15;
	let footer;
	let current;

	function markmap_mm_binding(value) {
		/*markmap_mm_binding*/ ctx[2].call(null, value);
	}

	let markmap_props = {
		content: /*content*/ ctx[1],
		style: "width: 100%; height: 300px"
	};

	if (/*mm*/ ctx[0] !== void 0) {
		markmap_props.mm = /*mm*/ ctx[0];
	}

	markmap = new Markmap_1({ props: markmap_props });
	binding_callbacks.push(() => bind(markmap, "mm", markmap_mm_binding));
	footer = new Footer({});

	return {
		c() {
			t0 = space();
			main = element("main");
			h1 = element("h1");
			em0 = element("em");
			t1 = text("markmap");
			t2 = space();
			h2 = element("h2");
			em1 = element("em");
			t3 = text("mark");
			t4 = text("down + mind");
			em2 = element("em");
			t5 = text("map");
			t6 = space();
			create_component(markmap.$$.fragment);
			t7 = space();
			p0 = element("p");
			strong = element("strong");
			t8 = text("Visualize your Markdown with mindmaps");
			t9 = space();
			p1 = element("p");
			a0 = element("a");
			t10 = text("Try it out →");
			t11 = space();
			p2 = element("p");
			a1 = element("a");
			t12 = text("Try markmap in VSCode");
			t13 = space();
			sup = element("sup");
			t14 = text("NEW");
			t15 = space();
			create_component(footer.$$.fragment);
			this.h();
		},
		l(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-14oh7yw\"]", document.head);
			head_nodes.forEach(detach);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			h1 = claim_element(main_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			em0 = claim_element(h1_nodes, "EM", {});
			var em0_nodes = children(em0);
			t1 = claim_text(em0_nodes, "markmap");
			em0_nodes.forEach(detach);
			h1_nodes.forEach(detach);
			t2 = claim_space(main_nodes);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			em1 = claim_element(h2_nodes, "EM", {});
			var em1_nodes = children(em1);
			t3 = claim_text(em1_nodes, "mark");
			em1_nodes.forEach(detach);
			t4 = claim_text(h2_nodes, "down + mind");
			em2 = claim_element(h2_nodes, "EM", {});
			var em2_nodes = children(em2);
			t5 = claim_text(em2_nodes, "map");
			em2_nodes.forEach(detach);
			h2_nodes.forEach(detach);
			t6 = claim_space(main_nodes);
			claim_component(markmap.$$.fragment, main_nodes);
			t7 = claim_space(main_nodes);
			p0 = claim_element(main_nodes, "P", {});
			var p0_nodes = children(p0);
			strong = claim_element(p0_nodes, "STRONG", {});
			var strong_nodes = children(strong);
			t8 = claim_text(strong_nodes, "Visualize your Markdown with mindmaps");
			strong_nodes.forEach(detach);
			p0_nodes.forEach(detach);
			t9 = claim_space(main_nodes);
			p1 = claim_element(main_nodes, "P", {});
			var p1_nodes = children(p1);
			a0 = claim_element(p1_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t10 = claim_text(a0_nodes, "Try it out →");
			a0_nodes.forEach(detach);
			p1_nodes.forEach(detach);
			t11 = claim_space(main_nodes);
			p2 = claim_element(main_nodes, "P", {});
			var p2_nodes = children(p2);

			a1 = claim_element(p2_nodes, "A", {
				href: true,
				target: true,
				rel: true,
				"data-ga-label": true
			});

			var a1_nodes = children(a1);
			t12 = claim_text(a1_nodes, "Try markmap in VSCode");
			a1_nodes.forEach(detach);
			t13 = claim_space(p2_nodes);
			sup = claim_element(p2_nodes, "SUP", { class: true });
			var sup_nodes = children(sup);
			t14 = claim_text(sup_nodes, "NEW");
			sup_nodes.forEach(detach);
			p2_nodes.forEach(detach);
			main_nodes.forEach(detach);
			t15 = claim_space(nodes);
			claim_component(footer.$$.fragment, nodes);
			this.h();
		},
		h() {
			document.title = "markmap";
			attr(h1, "class", "text-6xl font-bold mb-2");
			attr(h2, "class", "text-3xl font-medium mb-2 text-gray-500");
			attr(a0, "href", "repl");
			attr(a1, "href", "https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode");
			attr(a1, "target", "_blank");
			attr(a1, "rel", "noreferrer noopener");
			attr(a1, "data-ga-label", "markmapVSCodeFromIndex");
			attr(sup, "class", "text-red-600 italic");
			attr(main, "class", "home inner");
		},
		m(target, anchor) {
			insert(target, t0, anchor);
			insert(target, main, anchor);
			append(main, h1);
			append(h1, em0);
			append(em0, t1);
			append(main, t2);
			append(main, h2);
			append(h2, em1);
			append(em1, t3);
			append(h2, t4);
			append(h2, em2);
			append(em2, t5);
			append(main, t6);
			mount_component(markmap, main, null);
			append(main, t7);
			append(main, p0);
			append(p0, strong);
			append(strong, t8);
			append(main, t9);
			append(main, p1);
			append(p1, a0);
			append(a0, t10);
			append(main, t11);
			append(main, p2);
			append(p2, a1);
			append(a1, t12);
			append(p2, t13);
			append(p2, sup);
			append(sup, t14);
			insert(target, t15, anchor);
			mount_component(footer, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const markmap_changes = {};

			if (!updating_mm && dirty & /*mm*/ 1) {
				updating_mm = true;
				markmap_changes.mm = /*mm*/ ctx[0];
				add_flush_callback(() => updating_mm = false);
			}

			markmap.$set(markmap_changes);
		},
		i(local) {
			if (current) return;
			transition_in(markmap.$$.fragment, local);
			transition_in(footer.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(markmap.$$.fragment, local);
			transition_out(footer.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(t0);
			if (detaching) detach(main);
			destroy_component(markmap);
			if (detaching) detach(t15);
			destroy_component(footer, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let mm;

	const content = `\
# markmap

- beautiful
- useful
- easy
- interactive
`;

	onMount(() => {
		mm.svg.on("wheel.zoom", null).on("dblclick.zoom", null).on("mousedown.zoom", null).on("touchstart.zoom", null);
	});

	function markmap_mm_binding(value) {
		mm = value;
		$$invalidate(0, mm);
	}

	return [mm, content, markmap_mm_binding];
}

class Routes extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Routes;
