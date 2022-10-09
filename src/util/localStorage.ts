const localLoad = (key: string) => {
    const json = localStorage.getItem(`@${key}`);

    if (!json) return;

    return JSON.parse(json);
}

const localSave = (key: string, data: any) => {
    localStorage.setItem(`@${key}`, JSON.stringify(data));
}

export {
    localLoad, localSave
}
