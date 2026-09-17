import { connectDatabase, db } from './db'
import { Temporal } from 'temporal-polyfill'

let pendingSeed: Promise<void> | undefined

async function runSeed(): Promise<void> {
    await connectDatabase()

    const existingProfile = await db.orm.public.Profile.select('id').limit(1).all().first()

    if (existingProfile) {
        return
    }

    const profile = await db.orm.public.Profile.create({
        name: 'Озорнин Михаил',
        description:
            'Frontend-разработчик с 4+ годами коммерческого опыта. Увеличил производительность приложений на 80%, обеспечил рост трафика на коммерческих сайтах на 60%, повысил конверсию до 45%. Реализовал 5+ крупных проектов на React и Vue, внедрял архитектуру SPA/SSR и автоматизацию CI/CD.',
        github: 'https://github.com/MrDragonLord',
        linkedin: null,
    })

    await db.orm.public.Skill.createAll([
        { name: 'JavaScript', profileId: profile.id },
        { name: 'TypeScript', profileId: profile.id },
        { name: 'React', profileId: profile.id },
        { name: 'Next.js', profileId: profile.id },
        { name: 'Vue.js', profileId: profile.id },
        { name: 'Nuxt.js', profileId: profile.id },
        { name: 'Redux', profileId: profile.id },
        { name: 'Pinia', profileId: profile.id },
        { name: 'Vuex', profileId: profile.id },
        { name: 'TailwindCSS', profileId: profile.id },
        { name: 'shadcn/ui', profileId: profile.id },
        { name: 'HTML5', profileId: profile.id },
        { name: 'CSS3', profileId: profile.id },
        { name: 'SCSS', profileId: profile.id },
        { name: 'REST API', profileId: profile.id },
        { name: 'WebSockets', profileId: profile.id },
        { name: 'Docker', profileId: profile.id },
        { name: 'Git', profileId: profile.id },
        { name: 'GitLab', profileId: profile.id },
        { name: 'GitHub Actions', profileId: profile.id },
        { name: 'AWS', profileId: profile.id },
        { name: 'S3', profileId: profile.id },
        { name: 'Vite', profileId: profile.id },
        { name: 'Webpack', profileId: profile.id },
        { name: 'Linux', profileId: profile.id },
        { name: 'CI/CD', profileId: profile.id },
    ])

    await db.orm.public.Experience.createAll([
        {
            company: 'Южная маркетинговая компания',
            position: 'Frontend-разработчик',
            startDate: Temporal.Instant.from('2025-08-01T00:00:00Z'),
            endDate: Temporal.Instant.from('2026-07-31T00:00:00Z'),
            profileId: profile.id,
            achievements: [
                'Работал в команде из 10 разработчиков над крупными коммерческими проектами.',
                'Увеличил производительность Dasa Home на 80% за счет оптимизации архитектуры, внедрения кэширования и устранения узких мест.',
                'Провел частичный редизайн Dasa Home, улучшив UX и обеспечив рост трафика на 60%.',
                'Повысил конверсию сайта Мебель МАСК на 45% за счет полного редизайна и внедрения современного UI/UX.',
                'Перевел проект Мебель МАСК на Next.js, обеспечив масштабируемость и безопасность.',
                'Запустил отказоустойчивый и масштабируемый production Академии трех звезд с использованием Docker.',
                'Разработал админ-панель на Nuxt.js, Pinia, TanStack Query, TailwindCSS и shadcn/ui.',
                'Архитектурно спроектировал проект с учетом дальнейшего масштабирования.',
                'Выполнил миграцию проекта Моя родословная с React 16 на Next.js.',
                'Разработал интерактивное генеалогическое дерево с поиском, визуализацией связей и экспортом в PDF.',
                'Провел рефакторинг проекта с переходом на TypeScript и Redux Toolkit.',
            ],
        },
        {
            company: 'ООО «БК-РЕСУРС»',
            position: 'Frontend-разработчик',
            startDate: Temporal.Instant.from('2024-09-01T00:00:00Z'),
            endDate: Temporal.Instant.from('2025-07-31T00:00:00Z'),
            profileId: profile.id,
            achievements: [
                'Разработал с нуля и внедрил B2B веб-приложение для учета оборудования и сотрудников.',
                'Система обслуживала более 200 пользователей, 1000 объектов учета и 7 удаленных точек.',
                'Реализовал модуль автоматизированных отчетов по более чем 200 сотрудникам, сократив время подготовки на 40%.',
                'Оптимизировал схему хранения и выборки данных, уменьшив время выборки на 25%.',
                'Внедрил unit-тестирование для ключевой бизнес-логики.',
                'Отвечал за frontend, тестирование и автотесты.',
            ],
        },
        {
            company: 'Фриланс / личные проекты',
            position: 'Frontend-разработчик',
            startDate: Temporal.Instant.from('2023-06-01T00:00:00Z'),
            endDate: Temporal.Instant.from('2024-08-31T00:00:00Z'),
            profileId: profile.id,
            achievements: [
                'Разработал систему учета заявок для локального сервиса на Vue с динамической фильтрацией и email-уведомлениями.',
                'Снизил время обработки заявок на 50%.',
                'За год через систему было обработано около 5000 заявок.',
                'Создал React-приложение для добавления заявок, фотографий и геометок в офлайне с последующей синхронизацией.',
                'Внедрил Docker и автоматические сборки и деплой через GitHub Actions.',
            ],
        },
        {
            company: 'ООО «Хоум Риэл Эстейт»',
            position: 'Backend-разработчик',
            startDate: Temporal.Instant.from('2023-03-01T00:00:00Z'),
            endDate: Temporal.Instant.from('2023-05-31T00:00:00Z'),
            profileId: profile.id,
            achievements: [
                'Разработал Telegram-бота на Node.js и Telegraf для автоматического заполнения Google Sheets.',
                'Автоматизация сэкономила около 8 часов ручной работы еженедельно.',
                'Обеспечил устойчивую интеграцию с Google Spreadsheet API, снизив количество сбоев на 90%.',
                'Внедрил Prisma ORM для работы с базой данных.',
            ],
        },
        {
            company: 'Emou.su',
            position: 'Frontend-разработчик',
            startDate: Temporal.Instant.from('2021-07-01T00:00:00Z'),
            endDate: Temporal.Instant.from('2023-03-31T00:00:00Z'),
            profileId: profile.id,
            achievements: [
                'Развивал frontend веб-платформы игрового сообщества примерно на 5000 пользователей.',
                'Оптимизировал время загрузки за счет code-splitting и ленивой загрузки компонентов.',
                'Провел рефакторинг frontend-кода, унифицировал стили и логику.',
                'Внедрил WebSockets для онлайн-чата и табло онлайн-администраторов.',
            ],
        },
    ])

    await db.orm.public.Project.createAll([
        {
            name: 'Dasa Home',
            url: 'https://dasahome.ru',
            profileId: profile.id,
        },
        {
            name: 'Мебель МАСК',
            url: 'https://mebelmask.ru',
            profileId: profile.id,
        },
        {
            name: 'Академия трех звезд',
            url: 'https://академиятрехзвезд.рф',
            profileId: profile.id,
        },
    ])
}

export function seed(): Promise<void> {
    pendingSeed ??= runSeed().catch((error: unknown) => {
        pendingSeed = undefined
        throw error
    })

    return pendingSeed
}