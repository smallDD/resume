export function array2Tree(array) {
    let map = {};
    array.reduce((initVal, item) => {
        initVal[item.id] = item;
        return initVal;
    }, map);
    return array.reduce((arr, item) => {
        let pid = item.pid;
        let parent = map[pid];
        if (parent) {
            parent.children ? parent.children.push(item) : parent.children = [item]
        } else {
            arr.push(item)
        }
        return arr;
    }, [])
}