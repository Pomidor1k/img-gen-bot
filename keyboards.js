const { Markup } = require('telegraf');


const choose_language_keyboard = Markup.inlineKeyboard([
        [
            Markup.button.callback('Русский 🇷🇺', 'choose_language_ru_action')
        ],
        [
            Markup.button.callback('English 🇺🇸', 'choose_language_en_action')
        ],
]);

const start_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Купить💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('Узнать больше📚', 'learn_more_action')
        ],
        [
            Markup.button.url('About AI🔗', 'https://www.google.com/')
        ],
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Buy subscription💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('Learn more📚', 'learn_more_action')
        ],
        [
            Markup.button.url('About AI🔗', 'https://www.google.com/')
        ],
    ])
}

const learn_more_step_1_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Купить💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('Дальше➡️', 'learn_more_go_step_2_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Buy subscription💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('Next➡️', 'learn_more_go_step_2_action')
        ]
    ])
}

const learn_more_step_2_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Купить💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('А что еще?➡️', 'learn_more_go_step_3_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Buy subscription💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('What else?➡️', 'learn_more_go_step_3_action')
        ]
    ])
}

const learn_more_step_3_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Купить💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('Хе-хе, дальше!➡️', 'learn_more_go_step_4_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Buy subscription💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback("Hehe, let's continue!➡️", 'learn_more_go_step_4_action')
        ]
    ])
}

const learn_more_step_4_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Купить💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback('Дальше!➡️', 'learn_more_go_step_5_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Buy subscription💎', 'buy_subscription_action')
        ],
        [
            Markup.button.callback("Continue!➡️", 'learn_more_go_step_5_action')
        ]
    ])
}

const learn_more_step_5_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Создать клона👥', 'create_clone_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Create a clone👥', 'create_clone_action')
        ]
    ])
}

const learn_more_step_7_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Мужчина👨‍🦰', 'learn_more_go_step_8_male_action')
        ],
        [
            Markup.button.callback('Женщина👱‍♀️', 'learn_more_go_step_8_female_action')
        ],
        [
            Markup.button.callback('Не указывать👤', 'learn_more_go_step_8_nogender_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Male👨‍🦰', 'learn_more_go_step_8_male_action')
        ],
        [
            Markup.button.callback('Female👱‍♀️', 'learn_more_go_step_8_female_action')
        ],
        [
            Markup.button.callback('None👤', 'learn_more_go_step_8_nogender_action')
        ]
    ])
}

const learn_more_photos_uploaded_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Начать обучение🏋️', 'start_model_training_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Start training🏋️', 'start_model_training_action')
        ]
    ])
}

const upload_photos_buy_subscription_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Конечно купить💎', 'buy_subscription_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Ready to buy💎', 'buy_subscription_action')
        ]
    ])
}

const buy_subscription_standart_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('🏆Стандарт✅', 'no_action')
        ],
        [
            Markup.button.callback('🍿Старт', 'buy_subscription_start_action')
        ],
        [
            Markup.button.callback('👑Про', 'buy_subscription_pro_action')
        ],
        [
            Markup.button.callback('Выбрал➡️', 'go_to_payment_standart_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('🏆Standart✅', 'no_action')
        ],
        [
            Markup.button.callback('🍿Start', 'buy_subscription_start_action')
        ],
        [
            Markup.button.callback('👑Pro', 'buy_subscription_pro_action')
        ],
        [
            Markup.button.callback('Continue➡️', 'go_to_payment_standart_action')
        ]
    ])
}

const buy_subscription_start_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('🏆Стандарт', 'buy_subscription_standart_action')
        ],
        [
            Markup.button.callback('🍿Старт✅', 'no_action')
        ],
        [
            Markup.button.callback('👑Про', 'buy_subscription_pro_action')
        ],
        [
            Markup.button.callback('Выбрал➡️', 'go_to_payment_start_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('🏆Standart', 'buy_subscription_standart_action')
        ],
        [
            Markup.button.callback('🍿Start✅', 'no_action')
        ],
        [
            Markup.button.callback('👑Pro', 'buy_subscription_pro_action')
        ],
        [
            Markup.button.callback('Continue➡️', 'go_to_payment_start_action')
        ]
    ])
}

const buy_subscription_pro_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('🏆Стандарт', 'buy_subscription_standart_action')
        ],
        [
            Markup.button.callback('🍿Старт', 'buy_subscription_start_action')
        ],
        [
            Markup.button.callback('👑Про✅', 'no_action')
        ],
        [
            Markup.button.callback('Выбрал➡️', 'go_to_payment_pro_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('🏆Standart', 'buy_subscription_standart_action')
        ],
        [
            Markup.button.callback('🍿Start', 'buy_subscription_start_action')
        ],
        [
            Markup.button.callback('👑Pro✅', 'no_action')
        ],
        [
            Markup.button.callback('Continue➡️', 'go_to_payment_pro_action')
        ]
    ])
}

const choose_payment_method_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Telegram Stars⭐️', 'telegram_stars_payment_method_action')
        ],
        [
            Markup.button.callback('Оплата картой💳', 'credit_card_payment_method_action')
        ],
        [
            Markup.button.url('Помощь с оплатой❓', 'https://www.google.com/')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Telegram Stars⭐️', 'telegram_stars_payment_method_action')
        ],
        [
            Markup.button.callback('Pay by card💳', 'credit_card_payment_method_action')
        ],
        [
            Markup.button.url('Help with payment❓', 'https://www.google.com/')
        ]
    ])
}

const card_payment_unavailable_keyboard = {
    ru: Markup.inlineKeyboard([
        [
            Markup.button.callback('Telegram Stars⭐️', 'telegram_stars_payment_method_action')
        ]
    ]),
    en: Markup.inlineKeyboard([
        [
            Markup.button.callback('Telegram Stars⭐️', 'telegram_stars_payment_method_action')
        ]
    ])
}







module.exports = {
    choose_language_keyboard,
    start_keyboard,
    learn_more_step_1_keyboard,
    learn_more_step_2_keyboard,
    learn_more_step_3_keyboard,
    learn_more_step_4_keyboard,
    learn_more_step_5_keyboard,
    learn_more_step_7_keyboard,
    learn_more_photos_uploaded_keyboard,
    upload_photos_buy_subscription_keyboard,
    buy_subscription_standart_keyboard,
    buy_subscription_start_keyboard,
    buy_subscription_pro_keyboard,
    choose_payment_method_keyboard,
    card_payment_unavailable_keyboard
};