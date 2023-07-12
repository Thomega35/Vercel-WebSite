import { getCollection } from 'astro:content';
import type { SVGProps } from 'react';
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'My personal website.';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const POSTS = (await getCollection('blog')).sort(
	(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);
export const Menus = [
    { title: "About_Me", icon: <MdiAccountBox/>, href: "/" },
    { title: "Projects", icon: <MdiViewDashboard/>, href: "/personal" },
    { title: "Education", icon: <MdiSchool/>, href: "/education" },
    { title: "Career", spacing: true, icon: <MdiBriefcaseVariant/>, href: "/career" },
    { title: "Articles", submenu: true, //href: "/blog",
      submenuItems: POSTS.map((post) => ({
        title: post.data.title,
        href: `/blog/${post.slug}/`,
      })), icon: <MdiBookVariantMultiple/>
    },
    { title: "Contact", icon: <MdiCardAccountMail/>, href: "/about" },
];


export function MdiViewDashboard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10Z"></path></svg>
  )
}

export function MdiAccountBox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"></path></svg>
  )
}

export function MdiSchool(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"></path></svg>
  )
}

export function MdiBriefcaseVariant(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 16v-1H3v4c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4m10-9h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m-6 0h-4V5h4v2Z"></path></svg>
  )
}

export function MdiBookVariantMultiple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 6H2v14a2 2 0 0 0 2 2h14v-2H4V6m16-4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 10l-2.5-1.5L15 12V4h5v8Z"></path></svg>
  )
}

export function MdiCardAccountMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M21 8V7l-3 2l-3-2v1l3 2m4-7H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M8 6a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1m8-5h-8V6h8"></path></svg>
  )
}