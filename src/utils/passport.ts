import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { JWT_SECRET, JWT_OPTIONS, JwtPayload, JwtCallback } from '@/utils/jwt';
import { User } from '@/db/entity/User';

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET,
            ...JWT_OPTIONS,
        },
        async (jwtPayload: JwtPayload, done: JwtCallback) => {
            const user = await User.findOne({ id: jwtPayload.id });
            if (user === undefined) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        },
    ),
);
export { passport };
