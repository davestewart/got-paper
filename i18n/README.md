# Translations

Translations are taken from spreadsheets in Google Sheets on the [gotpaper@gmail.com](mailto:gotpaper@gmail.com) account.

They are converted using the online tool [Processr](http://processr.com).

Unfortunately, sign-in is broken on Processr right now (the site needs a PHP upgrade and probably associated refactoring) so the conversion process has to be created manually each time.


## Set up Processr

### Create a new process

1. Visit [processr.com](http://processr.com)
2. Click "New"

### Add the steps

#### Step 1:

1. Change the top operation to "Delegate"
2. Type "CSV" in the box and choose "Data/Utilities/Grab CSV columns"


#### Step 2:

1. Add a new operation and set it to "Process", and choose "Function" from the right hand context menu
2. Paste this code

```js
function(input){
	this.data = {};
	this.lastArea = '';
	return input
}
```

#### Step 3:

1. Add a new operation and set it to "Process", and choose "Function" and "Process Array elements" from the right hand context menu
2. Paste this code

```js
function process(input, index, elements, depth)
{
	if (!input.match(/\w/g)) {
		return ''
	}
	const [area, key, english, translation] = input.split('\t')
	if (area) {
		this.lastArea = area
		if (!this.data[area]) {
			this.data[area] = {}
		}
	}
	if (key) {
		this.data[this.lastArea][key] = translation
	}
	return ''
}
```


#### Step 4:

1. Add a new operation and set it to "Process", and choose "Function" from the right hand context menu
2. Paste this code

```js
function(input){
	return 'export default ' + JSON.stringify(this.data, null, '  ')
		.replace(/"(\w+)":/g, '$1:')
		.replace(/"(.*)"/g, (match, text) => `'${text.replace(/'/g, "\\'")}'`)
		+ '\n'
}
```

## Converting the translation spreadsheets

1. Select the spreadsheet content:

    - from top left (including the heading text)
    - to the bottom right (including the last value)

2. Copy the text

3. Return to Processr

4. Paste the text into the "Input" (left) panel

5. Click into the "Output" (right) panel

6. Copy
