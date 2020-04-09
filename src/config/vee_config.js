import { extend, localize } from 'vee-validate'
import en from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules'

const install = function(Vue) {
    localize('en', en);
    Object.keys(rules).forEach(rule => {
        extend(rule, rules[rule]);
    });
};

export default { install };