// import * as flsFunctions from './modules/functions.js';

import * as maskBy from '../libs/phoneMasks/phoneMaskBy.js'
import * as popup from '../libs/popup/popup.js'
import * as burger from './modules/burger.js'
import * as search from './modules/search.js'
import * as dropmenu from './modules/dropmenu.js'
import * as production from './modules/production.js'
import * as companiesSlider from './modules/companiesSlider.js'
import * as certificates from './modules/certificates.js'
import * as product from './modules/product.js'
import * as tabs from './modules/tabs.js'
import * as news from './modules/news.js'

// flsFunctions.isWebp()

$(window).on('load', function () {
    $('#loader').fadeOut('slow');
});

setTimeout(function () {
    $('#loader').fadeOut('slow');
}, 5000);
