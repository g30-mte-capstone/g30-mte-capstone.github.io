# G30 Capstone log

This is Group 30’s public project log. You do **not** need to be a programmer to add an entry. The usual flow is:

1. Make a branch (a private copy of the site)
2. Add a log file
3. Preview it on your computer
4. Save (commit) and upload (push)
5. Open a pull request so someone can review it before it goes live

The live site is [https://g30-mte-capstone.github.io](https://g30-mte-capstone.github.io).

---

## One-time setup

Do this once on your laptop.

### 1. Accounts and apps

- A [GitHub](https://github.com) account that can access the `g30-mte-capstone` org
- [Git](https://git-scm.com/downloads)
- [Node.js LTS](https://nodejs.org) (this also installs `npm`)

On a Mac, open **Terminal**. On Windows, open **Git Bash**.

Check that they installed:

```bash
git --version
node --version
npm --version
```

Each command should print a version number, not an error.

### 2. Download the project

```bash
git clone git@github.com:g30-mte-capstone/g30-mte-capstone.github.io.git
cd g30-mte-capstone.github.io
```

If SSH is not set up, use:

```bash
git clone https://github.com/g30-mte-capstone/g30-mte-capstone.github.io.git
cd g30-mte-capstone.github.io
```

### 3. Install the site’s dependencies

From that folder, once:

```bash
npm install
```

This downloads tools the preview needs. It can take a minute.

---

## Every time you add a log

### 1. Start from the latest `master`

`master` is the main copy of the site.

```bash
git checkout master
git pull
```

### 2. Make a branch

A **branch** is your own workspace. It keeps unfinished work off the live site.

Name it after the log, with hyphens, no spaces:

```bash
git checkout -b log-2026-09-18-sensing-rig
```

Stay on that branch until the pull request is opened.

Useful checks:

```bash
git status
git branch
```

`git status` shows what you changed. `git branch` shows which branch you are on (the current one has a `*`).

### 3. Add the log file

1. In the finder / file explorer, open `content/logs/`.
2. Copy `_template.md`.
3. Rename the copy. Do **not** keep the name `_template.md`, and do **not** start the name with `_` (those files are hidden from the site).

Good name:

```text
2026-09-18-sensing-rig.md
```

You can add more than one log in the same week, or even the same day. Give each file a unique name.

4. Open the new file in any text editor. Fill in the block at the top:

```md
---
title: "Sensing rig first pass"
date: 2026-09-18T14:30
authors: ["Your name"]
status: "on-track"
tags: ["hardware"]
---
```

| Field | What to put |
| --- | --- |
| `title` | Headline people will see |
| `date` | Day (`2026-09-18`) or day + time (`2026-09-18T14:30`) if you post more than once that day. Newest date shows first. |
| `authors` | Your name(s), in quotes, inside the brackets |
| `status` | `on-track`, `at-risk`, `blocked`, or `complete` |
| `tags` | Short labels, optional |

5. Write the rest in plain English under the headings (**Goals**, **What we did**, and so on). You can delete headings you do not need.

**Photos:** put the image file in the `public` folder (for example `public/sensing.jpg`). In the log, write:

```md
![A short description](/sensing.jpg)
```

The `/` at the start matters.

### 4. Preview on your computer

Still in the project folder, on your branch:

```bash
npm install
npm run dev
```

You only need `npm install` again if someone changed the project’s packages, but it is safe to run.

When it is ready, it will print a local address. Open the link to the local deployment in your browser. This link will be logged into the terminal you ran the commands from.

- Home should show your latest log
- **Logs** in the header lists every published entry
- Click yours and check the title, date, and photos

Leave the terminal window open while you preview. Stop the preview with `Ctrl` + `C`.

If the page looks old, stop it, run `npm run dev` again, and refresh the browser.

### 5. Commit (save a snapshot)

Git only remembers files you **add**, then **commit**.

```bash
git status
git add content/logs/2026-09-18-sensing-rig.md
```

If you added photos:

```bash
git add public/sensing.jpg
```

Or add everything you changed:

```bash
git add -A
git status
```

Read the list. You should **not** see `_template.md` as the only new log. Then:

```bash
git commit -m "Add sensing rig log"
```

Write a short message in the quotes saying what you did.

### 6. Push (upload the branch)

```bash
git push -u origin HEAD
```

This uploads **your branch**, not `master`. The live site does not change yet.

### 7. Open a pull request

A **pull request** (PR) is a request to copy your branch into `master`.

1. Open [https://github.com/g30-mte-capstone/g30-mte-capstone.github.io](https://github.com/g30-mte-capstone/g30-mte-capstone.github.io)
2. GitHub usually shows a banner **Compare & pull request**. Click it.
3. If not: click **Pull requests** → **New pull request**. Set the base branch to `master` and the compare branch to yours.
4. Title it clearly (`Add sensing rig log`).
5. Click **Create pull request**.

Ask a teammate to glance at it. When it is merged into `master`, GitHub Actions deploys the site. After a couple of minutes, refresh [https://g30-mte-capstone.github.io](https://g30-mte-capstone.github.io).

---

## Tiny Git glossary

| Word | Meaning |
| --- | --- |
| Repository (repo) | This project’s folder on GitHub |
| `master` | The official version that gets deployed |
| Branch | Your working copy |
| Commit | A saved snapshot with a message |
| Push | Upload commits to GitHub |
| Pull | Download the latest from GitHub |
| Pull request | A reviewable request to merge your branch into `master` |
