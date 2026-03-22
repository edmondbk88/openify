# How to Submit Opinafy to WordPress.org

## Prerequisites
1. Create account at https://wordpress.org/support/register/
2. Request plugin hosting at https://wordpress.org/plugins/developers/add/

## Submission Steps
1. Log in to wordpress.org
2. Go to https://wordpress.org/plugins/developers/add/
3. Fill in:
   - Plugin Name: Opinafy - Verified Customer Testimonials
   - Plugin Slug: opinafy-testimonials
   - Plugin URL: https://opinafy.com
   - Description: (see below)
4. Upload the plugin ZIP
5. Wait for review (typically 2-8 weeks)

## Plugin Description for Submission:
Opinafy lets you collect, manage, and display verified customer testimonials on your WordPress site. Features include email-verified testimonials, automatic company verification, customizable widgets with 65+ templates, video testimonials, and more. The #1 testimonial platform for Spanish-speaking businesses, now available worldwide.

## After Approval:
You'll get SVN access. Use these commands:
```bash
svn co https://plugins.svn.wordpress.org/opinafy-testimonials/
cp -r opinafy-testimonials/* trunk/
svn add trunk/*
svn ci -m "Initial release 1.0.0"
```

## Plugin Assets (for WordPress.org listing)
Place these in the `assets/` directory of SVN:
- `banner-772x250.png` - Plugin banner
- `banner-1544x500.png` - Hi-DPI plugin banner
- `icon-128x128.png` - Plugin icon
- `icon-256x256.png` - Hi-DPI plugin icon
- `screenshot-1.png` - Widget preview
- `screenshot-2.png` - Settings page
- `screenshot-3.png` - Dashboard

## Review Checklist
- [ ] No external API calls without user consent
- [ ] All strings internationalized
- [ ] No minified JS without source
- [ ] No phone-home without disclosure
- [ ] GPL-compatible license
- [ ] Proper sanitization/escaping
- [ ] Nonces for forms
- [ ] Capability checks for admin pages
