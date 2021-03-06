import { Request, Response } from 'express';

import { createCheckoutSessionService } from '../services/checkout';

import key from '../config/key';
import stripe from '../config/stripe';

export const createCheckoutSession = async (req: Request, res: Response) => {
    const { studentId, course } = req.body;
    try {
        const session = await createCheckoutSessionService(
            stripe,
            ['card'],
            [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: course.courseName,
                            images: [course.image],
                        },
                        unit_amount: course.price * 100,
                    },
                    quantity: 1,
                },
            ],
            'payment',
            `${key.DOMAIN_NAME}/my-courses/learning/`,
            `${key.DOMAIN_NAME}/`,
            `${!(studentId && course) ? '' : `${studentId + '/' + course.id}`}`
        );
        res.json({ id: session.id });
    } catch (err) {
        res.status(500).json(err);
    }
};
