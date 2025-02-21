const { Telegraf } = require('telegraf');
const LocalSession = require('telegraf-session-local'); // Подключаем библиотеку для сессий
const config = require('./config');
const messages = require('./messages');
const keyboards = require('./keyboards');

// Сообщение о технических неполадках
const tech_problems_no_language_message = `
🤖 Уважаемые пользователи! В данный момент мы сталкиваемся с техническими неполадками, которые могут временно ограничить работу бота. Мы уже активно работаем над их устранением, чтобы восстановить полную функциональность как можно скорее. Приносим извинения за возможные неудобства и благодарим вас за терпение и понимание! 🙏 Если у вас есть срочные вопросы или предложения, пожалуйста, свяжитесь с нашей службой поддержки: @Artem_Gradusov. Спасибо, что вы с нами! ❤️
-------------------------------
<b>🤖 Dear users,</b> We are currently experiencing technical issues that may temporarily limit the bot's functionality. Our team is actively working to resolve them and restore full functionality as soon as possible. We apologize for any inconvenience caused and appreciate your patience and understanding! 🙏 If you have any urgent questions or suggestions, please feel free to contact our support team: <a href="https://t.me/support_bot">Contact Support</a>. Thank you for being with us! ❤️
`;

const tech_problems_with_language_message = {
    ru: "🤖 Уважаемые пользователи! В данный момент мы сталкиваемся с техническими неполадками, которые могут временно ограничить работу бота. Мы уже активно работаем над их устранением, чтобы восстановить полную функциональность как можно скорее. Приносим извинения за возможные неудобства и благодарим вас за терпение и понимание! 🙏 Если у вас есть срочные вопросы или предложения, пожалуйста, свяжитесь с нашей службой поддержки: @Artem_Gradusov. Спасибо, что вы с нами! ❤️",
    en: "🤖 Dear users, We are currently experiencing technical issues that may temporarily limit the bot's functionality. Our team is actively working to resolve them and restore full functionality as soon as possible. We apologize for any inconvenience caused and appreciate your patience and understanding! 🙏 If you have any urgent questions or suggestions, please feel free to contact our support team: @Artem_Gradusov. Thank you for being with us! ❤️"
};

// Инициализация бота
const bot = new Telegraf(config.bot_token);

// Настройка сессий
const localSession = new LocalSession({
    database: 'sessions.json', // Файл для хранения сессий (можно изменить на другое имя)
    storage: LocalSession.storageFileAsync, // Асинхронное хранилище
    format: {
        serialize: (obj) => JSON.stringify(obj, null, 2), // Формат сериализации
        deserialize: (str) => JSON.parse(str) // Формат десериализации
    }
});
bot.use(localSession.middleware()); // Подключаем middleware для сессий

// Обработка команды /start
bot.start(async (ctx) => {
    try {
        // Очищаем сессию при старте
        ctx.session.language = null; // Сбрасываем язык
        ctx.session.modelName = ''
        await ctx.replyWithHTML(messages.choose_language_message, keyboards.choose_language_keyboard);
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});


bot.action(['choose_language_ru_action', 'choose_language_en_action'], async (ctx) => {
    try {
        const language = ctx.callbackQuery.data === 'choose_language_ru_action' ? 'ru' : 'en';
        ctx.session.language = language; // Сохраняем выбранный язык в сессии
        await ctx.replyWithVideo({source: './content/videos/video_sample.mp4'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.start_message[language],
            ...keyboards.start_keyboard[language]
        });
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action(['choose_language_ru_action', 'choose_language_en_action'], async (ctx) => {
    try {
        const language = ctx.callbackQuery.data === 'choose_language_ru_action' ? 'ru' : 'en';
        ctx.session.language = language; // Сохраняем выбранный язык в сессии
        await ctx.replyWithHTML(messages.start_message[language], keyboards.start_keyboard[language]);
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action(['choose_language_ru_action', 'choose_language_en_action'], async (ctx) => {
    try {
        const language = ctx.callbackQuery.data === 'choose_language_ru_action' ? 'ru' : 'en';
        ctx.session.language = language; // Сохраняем выбранный язык в сессии
        await ctx.replyWithHTML(messages.start_message[language], keyboards.start_keyboard[language]);
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action('learn_more_action', async (ctx) => {
    try {
        await ctx.replyWithPhoto({source: './content/images/img_sample.jpg'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.learn_more_step_1[ctx.session.language],
            ...keyboards.learn_more_step_1_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action('learn_more_go_step_2_action', async (ctx) => {
    try {
        await ctx.replyWithPhoto({source: './content/images/img_sample.jpg'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.learn_more_step_2[ctx.session.language],
            ...keyboards.learn_more_step_2_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action('learn_more_go_step_3_action', async (ctx) => {
    try {
        await ctx.replyWithPhoto({source: './content/images/img_sample.jpg'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.learn_more_step_3[ctx.session.language],
            ...keyboards.learn_more_step_3_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action('learn_more_go_step_4_action', async (ctx) => {
    try {
        await ctx.replyWithPhoto({source: './content/images/img_sample.jpg'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.learn_more_step_4[ctx.session.language],
            ...keyboards.learn_more_step_4_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action('learn_more_go_step_5_action', async (ctx) => {
    try {
        await ctx.replyWithVideo({source: './content/videos/video_sample.mp4'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.learn_more_step_5[ctx.session.language],
            ...keyboards.learn_more_step_5_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});

bot.action('create_clone_action', async (ctx) => {

    ctx.session.waitingForModelName = true  // флаг для ввода текста названия модели

    try {
        await ctx.replyWithHTML(messages.learn_more_step_6[ctx.session.language])
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});


bot.on('text', async (ctx) => {
    if (ctx.session.waitingForModelName) {
        ctx.session.modelName = ctx.message.text
        ctx.session.waitingForModelName = false
        await ctx.replyWithHTML(messages.learn_more_step_7[ctx.session.language], keyboards.learn_more_step_7_keyboard[ctx.session.language])
    }
})


bot.action(['learn_more_go_step_8_male_action', 'learn_more_go_step_8_female_action', 'learn_more_go_step_8_nogender_action'], async (ctx) => {
    
    ctx.session.waitingForTrainingPhotos = true
    ctx.session.trainingPhotosArray = []
    
    var selected_gender
    if (ctx.callbackQuery.data === 'learn_more_go_step_8_male_action') {
        ctx.session.userGender = 'male' 
        selected_gender = {
            ru: 'Мужчина',
            en: 'Male'
        }
    } else if (ctx.callbackQuery.data === 'learn_more_go_step_8_female_action') {
        ctx.session.userGender = 'female'
        selected_gender = {
            ru: 'Женщина',
            en: 'Female'
        }
    } else {
        ctx.session.userGender = 'none'
        selected_gender = {
            ru: 'Не указан',
            en: 'None'
        }
    }

    try {
        await ctx.replyWithPhoto({source: './content//images/img_sample.jpg'}, {
            protect_content: true,
            parse_mode: 'HTML',
            caption: messages.learn_more_step_8[ctx.session.language].replace('{{selected_gender}}', selected_gender[ctx.session.language]),
        })
        setTimeout(async () => {
            await ctx.replyWithHTML(messages.learn_more_step_9[ctx.session.language])
        }, 3000);
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
});


bot.on(['photo', 'document'], async (ctx) => {
    if (ctx.session.waitingForTrainingPhotos) {
        try {
            let file;
            if (ctx.message.photo) {
                file = await ctx.telegram.getFile(ctx.message.photo[ctx.message.photo.length - 1].file_id);
            } else if (ctx.message.document && ctx.message.document.mime_type.startsWith('image/')) {
                file = await ctx.telegram.getFile(ctx.message.document.file_id);
            }

            if (file) {
                const fileLink = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
                ctx.session.trainingPhotosArray.push(fileLink);
            }

            // Проверяем, если это группа изображений
            if (ctx.message.media_group_id) {
                if (!ctx.session.mediaGroupTracker) {
                    ctx.session.mediaGroupTracker = {}; // Используем объект вместо Set
                }

                if (!ctx.session.mediaGroupTracker[ctx.message.media_group_id]) {
                    ctx.session.mediaGroupTracker[ctx.message.media_group_id] = true;

                    // Отправляем сообщение только один раз для всей группы
                    setTimeout(async () => {
                        await ctx.replyWithHTML(
                            messages.learn_more_photos_uploaded[ctx.session.language].replace('{{photos_amount}}', ctx.session.trainingPhotosArray.length),
                            keyboards.learn_more_photos_uploaded_keyboard[ctx.session.language]
                        );
                        delete ctx.session.mediaGroupTracker[ctx.message.media_group_id]; // Удаляем после обработки
                    }, 1000);
                }
            } else {
                await ctx.replyWithHTML(
                    messages.learn_more_photos_uploaded[ctx.session.language].replace('{{photos_amount}}', ctx.session.trainingPhotosArray.length),
                    keyboards.learn_more_photos_uploaded_keyboard[ctx.session.language]
                );
            }

        } catch (error) {
            console.error('Ошибка при обработке фото:', error);
            await ctx.reply('Произошла ошибка при обработке фото.');
        }
    }
});


bot.action('start_model_training_action', async (ctx) => {
    try {
        await ctx.replyWithHTML(messages.upload_photos_buy_subscription[ctx.session.language], keyboards.upload_photos_buy_subscription_keyboard[ctx.session.language])
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
})


bot.action('buy_subscription_action', async (ctx) => {
    try {
        await ctx.replyWithHTML(messages.buy_subscription_intro[ctx.session.language])
        setTimeout(async () => {
            await ctx.replyWithHTML(messages.buy_subscription_standart[ctx.session.language], keyboards.buy_subscription_standart_keyboard[ctx.session.language])
        }, 2000);
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
})

bot.action('buy_subscription_start_action', async (ctx) => {
    try {
        await ctx.editMessageText(messages.buy_subscription_start[ctx.session.language], {
            parse_mode: 'HTML',
            ...keyboards.buy_subscription_start_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(messages.buy_subscription_start[ctx.session.language], keyboards.buy_subscription_start_keyboard[ctx.session.language])
    }
});

bot.action('buy_subscription_pro_action', async (ctx) => {
    try {
        await ctx.editMessageText(messages.buy_subscription_pro[ctx.session.language], {
            parse_mode: 'HTML',
            ...keyboards.buy_subscription_pro_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(messages.buy_subscription_pro[ctx.session.language], keyboards.buy_subscription_pro_keyboard[ctx.session.language])
    }
});

bot.action('buy_subscription_standart_action', async (ctx) => {
    try {
        await ctx.editMessageText(messages.buy_subscription_standart[ctx.session.language], {
            parse_mode: 'HTML',
            ...keyboards.buy_subscription_standart_keyboard[ctx.session.language]
        });
    } catch (error) {
        await ctx.replyWithHTML(messages.buy_subscription_standart[ctx.session.language], keyboards.buy_subscription_standart_keyboard[ctx.session.language])
    }
});

bot.action(['go_to_payment_standart_action', 'go_to_payment_start_action', 'go_to_payment_pro_action'],async (ctx) => {

    if (ctx.callbackQuery.data === 'go_to_payment_start_action') {
        ctx.session.subscriptionLevel = 'start'
    } else if (ctx.callbackQuery.data === 'go_to_payment_pro_action') {
        ctx.session.subscriptionLevel = 'pro'
    } else {
        ctx.session.subscriptionLevel = 'standart'
    }

    try {
        await ctx.replyWithHTML(messages.choose_payment_method[ctx.session.language], keyboards.choose_payment_method_keyboard[ctx.session.language])
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
})

bot.action('credit_card_payment_method_action', async (ctx) => {
    try {
        await ctx.replyWithHTML(messages.card_payment_unavailable[ctx.session.language], keyboards.card_payment_unavailable_keyboard[ctx.session.language])
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message);
    }
})

bot.action('telegram_stars_payment_method_action', async (ctx) => {
    try {
        if (ctx.session.subscriptionLevel === 'start') {
            await ctx.replyWithInvoice({
                provider_token: '',
                title: ctx.session.language === 'ru' ? 'Подписка СТАРТ' : 'START subscription',
                description: ctx.session.language === 'ru' ? 'Описание' : 'description',
                payload: ctx.from.id,
                currency: 'XTR',
                prices: [{ label: 'START', amount: 500 }],
                start_parameter: 'payment_start',
                provider_data: {},
            });
        } else if (ctx.session.subscriptionLevel === 'pro') {
            await ctx.replyWithInvoice({
                provider_token: '',
                title: ctx.session.language === 'ru' ? 'Подписка ПРО' : 'PRO subscription',
                description: ctx.session.language === 'ru' ? 'Описание' : 'description',
                payload: ctx.from.id,
                currency: 'XTR',
                prices: [{ label: 'PRO', amount: 1500 }],
                start_parameter: 'payment_start',
                provider_data: {},
            });
        } else {
            await ctx.replyWithInvoice({
                provider_token: '',
                title: ctx.session.language === 'ru' ? 'Подписка СТАНДАРТ' : 'STANDART subscription',
                description: ctx.session.language === 'ru' ? 'Описание' : 'description',
                payload: ctx.from.id,
                currency: 'XTR',
                prices: [{ label: 'STANDART', amount: 1000 }],
                start_parameter: 'payment_start',
                provider_data: {},
            });
        }
    } catch (error) {
        await ctx.replyWithHTML(tech_problems_no_language_message)
    }
})

bot.on('message', async (ctx) => { //!проверка оплаты ПРОТЕСТИРОВАТЬ!!!!!
    if (ctx.message.successful_payment) {
        const payload = ctx.message.successful_payment.invoice_payload;
        console.log(`Payload: ${payload}`);
    }
})











// Запуск бота
bot.launch();
console.log('Бот запущен...');

// Обработка завершения работы
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));