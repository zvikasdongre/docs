# V0 Migration Guide

This guide will help you migrate from Paymenter v0.x to v1.0-alpha.

## Step 1: Backup your data

Before you start the migration process, make sure to backup your data. You can do this by running the following command:

```bash
mysqldump -u root -p paymenter > paymenter.sql
```

## Step 2: Follow the installation guide

To install the alpha release, you can follow the instructions in the [installation guide](/docs/installation). 

But instead the `Setting up database` section run:

```bash
php artisan migrate:fresh --seed
php artisan app:init
```

## Step 3: Create a temporary user for import

To import your data from v0.x to v1.0-alpha, you need to create a temporary database:

```bash
mysql -u root -p
CREATE DATABASE paymenter_temp;
GRANT ALL PRIVILEGES ON paymenter_temp.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;
```

Then import your data:

```bash
mysql -u root -p paymenter_temp < paymenter.sql
```

## Step 4: Change old data to new data

Now that you have your data in the temporary database, you can start changing the data to the new format:
Make sure to replace the `yourPassword` with your database password.

```bash
php artisan app:migrate 127.0.0.1 paymenter_temp paymenter yourPassword
```

## Step 5: Cleanup

Now that you have migrated your data, you can remove the temporary database:

```bash
mysql -u root -p
DROP DATABASE paymenter_temp;
```

## Step 6: Done

You have now successfully migrated from v0.x to v1.0-alpha. If you have any issues, please let us know by creating an issue on our [GitHub repository](https://github.com/Paymenter/Paymenter/issues).