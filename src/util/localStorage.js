const localLoad = (key) => {
    const json = localStorage.getItem(`@${key}`);

    if (!json) return;

    return JSON.parse(json);
}

const localSave = (key, data) => {
    localStorage.setItem(`@${key}`, JSON.stringify(data));
}

export {
    localLoad, localSave
}
