---
layout: blog
title: Site redesign and moving to Jekyll
category: jekyll
img: sample.jpg
tn: sample-tn.jpg
tags: Jekyll, Drupal, redesign
description: Thoughts after redesigning my Drupal site and moving to Jekyll.
lastmod: 2013-02-09
---
When I decided to redesign my web site a while ago I wanted to scale down on
size, content and maintanance. The old site was 3 years old and in the meanwhile
lots of new projects and services had come out of the woodworks. Seeing
Developmentseed move away completely from Drupal to Jekyll for their sites was
a real eye opener. While Drupal became more and more complex the idea of building
static sites with limited functionality seemed very refreshing.

### Reasons for redesigning my web site
- To scale down and remove clutter: one page that shows what I do and another listing blog posts is all I need.
- To focus on a different audience with an updated skill set.
- To improve the design and better use of space thanks to breaking out of the 960 grid.
- Making the site responsive for access on any device.

### Reasons for moving to Jekyll
- Fits in the idea of scaling down on functionality and clutter.
- Simple and hassle free hosting with Github pages (if you're familiar with git).
- My old site was still running drupal 6 and required regular module updating while
the only functionality on the site was limited and I wasn't even using it often.
- The site serves just static html, thus no performance lost on rendering logic.
- It's refreshing not having to install Drupal, setting up modules and not having to update them over time.

### Some things I learned while rewriting the site
- Used Jekyll and Liquid for the first time. This was also the first time I used a proper templating system. It's very similar to Twig, so it was a good way to get my feet wet for templating in Drupal 8.
- Used [Zen Grids](http://zengrids.com/) in a non-Drupal project, which turned 
out to work excellent. Zen Grids is created by John Albin Wilkins who is the
maintainer of the Drupal Zen base theme. Zen Grids is a key component of the Zen
theme, but is intended to be usable on any project.
- [Flexslider](http://www.woothemes.com/flexslider/) is a responsive jQuery slideshow plugin that works just great.
- Applied a nice solution for elements that are hidden with jQuery using
display: none; Normally these elements lose their proportions or are unable to calculate them
because of it. In my case it was the flexslider that would lose its
proportions after changing the viewport while hidden. This [small tip in the
jQuery docs](http://docs.jquery.com/UI/API/1.8/Tabs#...my_slider.2C_Google_Map.2C_sIFR_etc._not_work_when_placed_in_a_hidden_.28inactive.29_tab.3F)
help helped me fix that.
- don't use .load() to check if an image is loaded. Images could be cached.
I used [imagesLoaded](https://github.com/desandro/imagesloaded) for this task.
- Creating a jekyll site for the first time still required quite a bit of work.
Most of it was learning Jekyll & Liquid and planning the general architecture.
- It forced me to refresh my memory about small things drupal provides out of
the box, such as meta tags, site structure, markup, etc.

I really enjoyed working with Jekyll & Liquid and look forward to play with it
even more. Maybe dig deeper in the plugin structure and such. I didn't use
[Octopress](http://octopress.org/) or
[Jekyll bootstrap](http://jekyllbootstrap.com/) - though they might be interesting - because the whole point was to 
keep things as simple as possible and not to have too much functionality out of
the box.

Having the code of your site publicly hosted on a github repo is interesting.
While it can be made private, I kind of like the level of transparency it comes
with. In a true open source spirit others can see how things are implemented and
people can do pull requests to improve both the site and content. I don't expect
this to happen, but it's possible.

I still use Drupal everyday and I love it, but next time I need to create a
small web site, I will definitely consider building it with Jekyll again.

### Further reading
- Developmentseed: [Using Jekyll and GitHub Pages for our Site](http://developmentseed.org/blog/2011/09/09/jekyll-github-pages/)
- Developmentseed: [How We Build CMS Free Websites](http://developmentseed.org/blog/2012/07/27/build-cms-free-websites/)
- Nettuts+: [Building Static Sites with Jekyll]()
- Tom MacWright: [Thinking Static](http://macwright.org/2013/01/08/thinking-static.html)
- Tom MacWright: [Indexing and Searching Big Static Data](http://macwright.org/2012/11/14/indexing-searching-big-static-data.html)