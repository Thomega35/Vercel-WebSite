import { getCollection } from 'astro:content';
import { MdDashboard, MdAccountBox, MdSchool, MdWork, MdOutlineLibraryBooks, MdPermContactCalendar } from 'react-icons/md';
// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'My personal website.';
export const SITE_DESCRIPTION = 'Welcome to my website!';
export const POSTS = (await getCollection('blog')).sort(
	(a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
);
export const Menus = [
    { title: "About_Me", icon: <MdAccountBox/>, href: "/" },
    { title: "Projects", icon: <MdDashboard/>, href: "/personal" },
    { title: "Education", icon: <MdSchool/>, href: "/education" },
    { title: "Career", spacing: true, icon: <MdWork/>, href: "/career" },
    { title: "Articles", submenu: true, //href: "/blog",
      submenuItems: POSTS.map((post) => ({
        title: post.data.title,
        href: `/blog/${post.slug}/`,
      })), icon: <MdOutlineLibraryBooks/>
    },
    { title: "Contact", icon: <MdPermContactCalendar/>, href: "/about" },
];


