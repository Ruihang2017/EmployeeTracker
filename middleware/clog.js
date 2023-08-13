exports.clog = (req, res, next) => {
    const fgYellow = '\x1b[33m';

    switch (req.method) {
        case 'GET': {
            console.info(`${fgYellow}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${fgYellow}${req.method} request to ${req.path}`);
            break;
        }
        default: {
            console.info(`${fgYellow}${req.method} request to ${req.path}`);
            break;
        }
    }
    next();
};

// exports.clog = clog;