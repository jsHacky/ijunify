// Custom Module that handles each line and makes corrections
export const lighte = function (element) {
    if (element.length != 31 && element.length < 116) {
        return undefined;
    }
    let forbidden = ['2502', '2552', '2072'];
    let skr03 = {
        noBU: ["1511", "1516", "1517", "1518", "3010", "3011", "3012", "3013", "3014", "3015", "3016", "3017", "3018", "3019", "3030", "3031", "3032", "3033", "3034", "3035", "3036", "3037", "3038", "3039", "3062", "3063", "3066", "3067", "3070", "3071", "3075", "3076", "3089", "3091", "3092", "3106", "3108", "3110", "3113", "3115", "3120", "3121", "3125", "3126", "3130", "3133", "3135", "3140", "3141", "3143", "3145", "3146", "3151", "3300", "3301", "3302", "3303", "3304", "3305", "3306", "3307", "3308", "3309", "3400", "3401", "3402", "3403", "3404", "3405", "3406", "3407", "3408", "3409", "3425", "3426", "3427", "3428", "3429", "3430", "3435", "3440", "3505", "3506", "3507", "3508", "3509", "3540", "3541", "3542", "3543", "3544", "3545", "3546", "3547", "3548", "3549", "3550", "3553", "3560", "3565", "3710", "3711", "3714", "3715", "3717", "3718", "3720", "3721", "3722", "3723", "3724", "3725", "3726", "3727", "3731", "3734", "3736", "3738", "3743", "3746", "3748", "3750", "3751", "3754", "3755", "3760", "3761", "3780", "3781", "3784", "3785", "3788", "3789", "3790", "3791", "3792", "3793", "3794", "3796", "3798", "8100", "8101", "8102", "8103", "8104", "8105", "8110", "8120", "8125", "8130", "8140", "8150", "8160", "8165", "8191", "8194", "8196", "8300", "8301", "8301", "8302", "8303", "8304", "8305", "8306", "8307", "8308", "8309", "8310", "8311", "8312", "8313", "8314", "8315", "8316", "8317", "8318", "8319", "8330", "8335", "8336", "8336", "8337", "8338", "8339", "8340", "8341", "8342", "8343", "8344", "8345", "8346", "8347", "8348", "8349", "8400", "8401", "8402", "8403", "8404", "8405", "8406", "8407", "8408", "8409", "8410", "8514", "8515", "8516", "8519", "8574", "8575", "8576", "8579", "8591", "8595", "8609", "8611", "8613", "8625", "8625", "8626", "8627", "8628", "8629", "8630", "8631", "8632", "8633", "8634", "8635", "8636", "8637", "8638", "8639", "8640", "8641", "8642", "8643", "8644", "8649", "8701", "8702", "8703", "8704", "8705", "8710", "8711", "8720", "8721", "8723", "8724", "8725", "8726", "8731", "8736", "8738", "8741", "8742", "8743", "8746", "8748", "8750", "8751", "8760", "8761", "8780", "8781", "8790", "8791", "8801", "8802", "8803", "8804", "8805", "8806", "8807", "8808", "8820", "8821", "8822", "8823", "8824", "8825", "8827", "8828", "8850", "8851", "8852", "8910", "8911", "8912", "8913", "8915", "8916", "8917", "8920", "8921", "8922", "8925", "8926", "8927", "8930", "8931", "8932", "8933", "8935", "8936", "8937", "8940", "8941", "8942", "8943", "8945", "8946", "8947"],
        aV: ["1511", "1516", "1517", "1518", "3010", "3011", "3012", "3013", "3014", "3015", "3016", "3017", "3018", "3019", "3030", "3031", "3032", "3033", "3034", "3035", "3036", "3037", "3038", "3039", "3062", "3063", "3066", "3067", "3070", "3071", "3075", "3076", "3089", "3091", "3092", "3106", "3108", "3110", "3113", "3115", "3120", "3121", "3125", "3126", "3130", "3133", "3135", "3140", "3141", "3143", "3145", "3146", "3151", "3300", "3301", "3302", "3303", "3304", "3305", "3306", "3307", "3308", "3309", "3400", "3401", "3402", "3403", "3404", "3405", "3406", "3407", "3408", "3409", "3425", "3426", "3427", "3428", "3429", "3430", "3435", "3440", "3505", "3506", "3507", "3508", "3509", "3540", "3541", "3542", "3543", "3544", "3545", "3546", "3547", "3548", "3549", "3550", "3553", "3560", "3565", "3710", "3711", "3714", "3715", "3717", "3718", "3720", "3721", "3722", "3723", "3724", "3725", "3726", "3727", "3731", "3734", "3736", "3738", "3743", "3746", "3748", "3750", "3751", "3754", "3755", "3760", "3761", "3780", "3781", "3784", "3785", "3788", "3789", "3790", "3791", "3792", "3793", "3794", "3796", "3798"],
        aM: ["8100", "8101", "8102", "8103", "8104", "8105", "8110", "8120", "8125", "8130", "8140", "8150", "8160", "8165", "8191", "8194", "8196", "8300", "8301", "8301", "8302", "8303", "8304", "8305", "8306", "8307", "8308", "8309", "8310", "8311", "8312", "8313", "8314", "8315", "8316", "8317", "8318", "8319", "8330", "8335", "8336", "8336", "8337", "8338", "8339", "8340", "8341", "8342", "8343", "8344", "8345", "8346", "8347", "8348", "8349", "8400", "8401", "8402", "8403", "8404", "8405", "8406", "8407", "8408", "8409", "8410", "8514", "8515", "8516", "8519", "8574", "8575", "8576", "8579", "8591", "8595", "8609", "8611", "8613", "8625", "8625", "8626", "8627", "8628", "8629", "8630", "8631", "8632", "8633", "8634", "8635", "8636", "8637", "8638", "8639", "8640", "8641", "8642", "8643", "8644", "8649", "8701", "8702", "8703", "8704", "8705", "8710", "8711", "8720", "8721", "8723", "8724", "8725", "8726", "8731", "8736", "8738", "8741", "8742", "8743", "8746", "8748", "8750", "8751", "8760", "8761", "8780", "8781", "8790", "8791", "8801", "8802", "8803", "8804", "8805", "8806", "8807", "8808", "8820", "8821", "8822", "8823", "8824", "8825", "8827", "8828", "8850", "8851", "8852", "8910", "8911", "8912", "8913", "8915", "8916", "8917", "8920", "8921", "8922", "8925", "8926", "8927", "8930", "8931", "8932", "8933", "8935", "8936", "8937", "8940", "8941", "8942", "8943", "8945", "8946", "8947",]
    };
    let skr04 = {
        noBU: ["1181", "1184", "1185", "1186", "5110", "5111", "5112", "5113", "5114", "5115", "5116", "5117", "5118", "5119", "5130", "5131", "5132", "5133", "5134", "5135", "5136", "5137", "5138", "5139", "5160", "5162", "5163", "5166", "5167", "5170", "5171", "5175", "5176", "5189", "5191", "5192", "5300", "5301", "5302", "5303", "5304", "5305", "5306", "5307", "5308", "5309", "5400", "5401", "5402", "5403", "5404", "5405", "5406", "5407", "5408", "5409", "5420", "5421", "5422", "5423", "5424", "5425", "5425", "5426", "5427", "5428", "5429", "5430", "5435", "5440", "5505", "5506", "5507", "5508", "5509", "5540", "5541", "5542", "5543", "5544", "5545", "5546", "5547", "5548", "5549", "5550", "5553", "5560", "5565", "5710", "5711", "5714", "5715", "5717", "5718", "5720", "5721", "5722", "5723", "5724", "5725", "5726", "5727", "5731", "5734", "5736", "5738", "5741", "5743", "5746", "5748", "5750", "5751", "5754", "5755", "5760", "5761", "5780", "5781", "5784", "5785", "5788", "5790", "5791", "5792", "5793", "5794", "5798", "5906", "5908", "5910", "5913", "5915", "5920", "5921", "5923", "5925", "5926", "5930", "5933", "5935", "5940", "5941", "5943", "5945", "5946", "5951"],
        aV: ["1181", "1184", "1185", "1186", "5110", "5111", "5112", "5113", "5114", "5115", "5116", "5117", "5118", "5119", "5130", "5131", "5132", "5133", "5134", "5135", "5136", "5137", "5138", "5139", "5160", "5162", "5163", "5166", "5167", "5170", "5171", "5175", "5176", "5189", "5191", "5192", "5300", "5301", "5302", "5303", "5304", "5305", "5306", "5307", "5308", "5309", "5400", "5401", "5402", "5403", "5404", "5405", "5406", "5407", "5408", "5409", "5420", "5421", "5422", "5423", "5424", "5425", "5425", "5426", "5427", "5428", "5429", "5430", "5435", "5440", "5505", "5506", "5507", "5508", "5509", "5540", "5541", "5542", "5543", "5544", "5545", "5546", "5547", "5548", "5549", "5550", "5553", "5560", "5710", "5711", "5714", "5715", "5717", "5718", "5720", "5721", "5722", "5723", "5724", "5725", "5726", "5727", "5731", "5734", "5736", "5738", "5741", "5743", "5746", "5748", "5750", "5751", "5754", "5755", "5760", "5761", "5780", "5781", "5784", "5785", "5788", "5790", "5791", "5792", "5793", "5794", "5798", "5906", "5908", "5910", "5913", "5915", "5920", "5921", "5923", "5925", "5926", "5930", "5933", "5935", "5940", "5941", "5943", "5945", "5946", "5951"],
        aM: ["3260", "3270", "3271", "3272", "4100", "4105", "4110", "4120", "4125", "4130", "4135", "4136", "4139", "4140", "4150", "4160", "4165", "4186", "4300", "4301", "4302", "4303", "4304", "4305", "4306", "4307", "4308", "4309", "4310", "4311", "4312", "4313", "4314", "4315", "4316", "4317", "4318", "4319", "4330", "4335", "4336", "4337", "4338", "4339", "4339", "4340", "4341", "4342", "4343", "4344", "4345", "4346", "4347", "4348", "4349", "4400", "4400", "4401", "4402", "4403", "4404", "4405", "4406", "4407", "4408", "4409", "4410", "4564", "4565", "4566", "4569", "4574", "4575", "4576", "4579", "4610", "4611", "4612", "4613", "4614", "4615", "4616", "4620", "4621", "4622", "4623", "4624", "4625", "4626", "4630", "4631", "4632", "4633", "4634", "4635", "4636", "4640", "4641", "4642", "4643", "4644", "4645", "4646", "4650", "4651", "4652", "4653", "4654", "4655", "4656", "4660", "4661", "4662", "4663", "4664", "4665", "4666", "4670", "4671", "4672", "4673", "4674", "4675", "4676", "4680", "4681", "4682", "4683", "4684", "4686", "4687", "4705", "4710", "4711", "4720", "4721", "4723", "4724", "4725", "4726", "4729", "4731", "4736", "4738", "4741", "4742", "4743", "4746", "4748", "4750", "4751", "4760", "4761", "4780", "4781", "4790", "4791", "4834", "4836", "4841", "4842", "4844", "4845", "4848", "4861", "4862", "4865", "4866", "4867", "4941", "4945", "4947", "4948", "6281", "6285", "6286", "6387", "6884", "6885", "6888", "6931", "6932", "6933", "6934", "6935", "6936", "6937", "6938", "6939"]
    };
    let auto = function (skr) {
        let arr = [];
        skr.aV.forEach(function (item) { arr.push(item); });
        skr.aM.forEach(function (item) { arr.push(item); });
        return arr;
    }; // Klont Automatikkonten aus dem SKR-Objekt
    let a = auto(skr04); // Im Fall von SKR 03 entsprechend aendern!
    for (let j = 0; j < a.length; j++) {
        if (a[j] == element[7] && element[8] != '' && element[8] != '400') {
            element[8] = "40";
        }
        else if (a[j] == element[6] && element[8] != '' && element[8] != '400') {
            element[8] = "40";
        }
    } // Entfernt den Schluessel bei Automatikkonten
    if (element[8] == '10' || element[8] == "10" || element[8] == '"10"') {
        element[8] = '0';
    } // Korrigiert falsche Verwendung von BU-10
    if (forbidden.indexOf(element[6]) > -1) {
        element[6] = element[6].slice(0, element[6].length - 1) + '0';
    } // Konto
    if (forbidden.indexOf(element[7]) > -1) {
        element[7] = element[7].slice(0, element[7].length - 1) + '0';
    } // Gegenkonto
    return element;
};
export const lightBool = function (element) {
    // Insert custom logic if need be (only)
    return element !== undefined && element !== null;
};
//# sourceMappingURL=lighte.js.map