## Main Functionality

---

This extension make logging message in node development much easier by automating the operation of writing meaningful log message.

## Features

---

1. code snippets
1. keyboard shortcuts
1. vscode commands

```javascript
const student = { id: 'GN0217', name: 'chenzhifen' };
```

Code Snippets:

- gerror : `` logger.error(`${trace()}:student:%o`, student); ``
- gwarn : `` logger.warn(`${trace()}:student:%o`, student); ``
- ginfo : `` logger.info(`${trace()}:student:%o`, student); ``
- gverbose : `` logger.verbose(`${trace()}:student:%o`, student); ``
- gdebug : `` logger.debug(`${trace()}:student:%o`, student); ``
- gsilly : `` logger.silly(`${trace()}:student:%o`, student); ``

keyboard shortcuts

- alt + l , alt + e : **gerror**
- alt + l , alt + w : **gwarn**
- alt + l , alt + i : **ginfo**
- alt + l , alt + v : **gverbose**
- alt + l , alt + d : **gdebug**
- alt + l , alt + s : **gsilly**

vscode commands

- Rdapp error log : **gerror**
- Rdapp warn log : **gwarn**
- Rdapp info log : **ginfo**
- Rdapp verbose log : **gverbose**
- Rdapp debug log : **gdebug**
- Rdapp silly log : **gsilly**

**_Warning:_**

The extension rely on node project and using winston logger!!!

## Release Notes

---

### 1.0.x

- Initial release of rdappnodelogger.
- View CHANGELOG for more detail.

## Participate

---

You're more than welcome to participate in the development of the extension by creating pull requests and submitting issues, link of the project in github: https://github.com/jkmchinese/rdappnodelogger.git

## Contact

---

You can contact me on the following mail: chenzhifen@genew.com

## License

---

MIT &copy; rdapp

---

**Enjoy!**
