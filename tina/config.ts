
import { defineConfig } from 'tinacms';

export default defineConfig({
branch: 'main',
build: {
outputFolder: 'admin',
publicFolder: 'public',
},
media: {
tina: {
mediaRoot: '',
publicFolder: 'public',
},
},
schema: {
collections: [
{
name: 'post',
label: 'Posts',
path: 'content/posts',
format: 'md',
fields: [
{
type: 'string',
name: 'title',
label: 'Title',
isTitle: true,
required: true,
},
{
type: 'string',
name: 'publishedDate',
label: 'Publication date',
},
{
type: 'rich-text',
name: 'body',
label: 'Article body',
},
],
},
],
},
});