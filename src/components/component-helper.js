export default {
    findParentByName(vnode, parentName) {
        let parent = vnode.$parent;
        while(typeof(parent) !== 'undefined' && parent != null && parent.$options.name != parentName) {
            parent = parent.$parent;
        }

        if(typeof(parent) == 'undefined' || parent == null) {
            throw `Parent [${parentName}] not found`;
        }

        return parent;
    }
}