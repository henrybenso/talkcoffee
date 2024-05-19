export default async function saltAndHashPassword(str: string): Promise<string> {
    const {
        createHash,
    } = await import('node:crypto');
    const hash = createHash("sha256")
    hash.update(str)
    // console.log(hash.digest('hex'));
    return hash.digest('hex');
}