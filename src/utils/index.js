import Swal from 'sweetalert2';

export function classNames(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}


export function success (title = 'success') {
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500
    });
}

export function confirm (text = "Do you want to remove this link?", cb){
     Swal.fire({
        title: 'Remove link?',
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'has been deleted.',
                'success'
            );
            if (cb && typeof cb === 'function') {
                cb();
            }
        }
    });
}


export function setArray(list) {
    const localStorageKey = 'hb-list';
    localStorage.setItem(localStorageKey, JSON.stringify(list));
}



export function setItem(item) {
    const defaultList = getArray();
    defaultList.unshift(item);
    setArray(defaultList);

    return defaultList;
}


export function getArray() {
    const localStorageKey = 'hb-list';
    const list = localStorage.getItem(localStorageKey);
    if (list) return JSON.parse(list);

    return [];
}

