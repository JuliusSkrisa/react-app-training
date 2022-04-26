const bluetoothService = {
    getPairedDevice: () => {
        return new Promise((resolve) => {
            navigator.bluetooth.requestDevice({
                filters: [{
                    namePrefix: 'QuantaFlo'
                }],
            })
            .then(device => { resolve(device) })
            .catch(error => { console.error(error); resolve(error) });
        });
    }
}

export default bluetoothService;